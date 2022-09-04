import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { ActionCreator } from '../../store/action';
import { getShortLink } from '../../store/api-actions';

import Button from '../UI/Button/Button';
import TextInput from '../UI/TextInput/TextInput';
import './Squeeze.scss';

const Squeeze = ():JSX.Element => {
  const [linkValue, setLinkValue] = useState('');
  const [copyTooltipVisibility, setCopyTooltipVisibility] = useState(false);
  const shortLink = useSelector((state: RootState) => state.data.shortLink);
  const linkError = useSelector((state: RootState) => state.data.linkError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreator.getShortLink(null));
    dispatch(ActionCreator.addLinkError(null));
  }, []);

  const onCopyButtonClick = () => {
    navigator.clipboard.writeText(shortLink); // копируем ссылку в буфер
    setCopyTooltipVisibility(true); // отображаем окошко-уведомление о том, что ссылка скопирована

    setTimeout(() => {
      setCopyTooltipVisibility(false); // устанавливаем таймер на исчезновение окошка-уведомления
    }, 3000)
  };

  const onSqueezeFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(ActionCreator.getShortLink(null));
    dispatch(getShortLink(linkValue))
  }

  return (
    <section className="squeeze">
      <h1 className='visually-hidden'>Сокращение ссылок</h1>

      <p className="squeeze__title">Введите ссылку для сжатия</p>

      <form className="squeeze__form" action="" onSubmit={onSqueezeFormSubmit}>
        <div className="squeeze__input">
          <TextInput value={linkValue} placeholder={'http://source.com'} onChange={(evt) => setLinkValue((evt.target as HTMLInputElement).value)} required={true}/>
        </div>
        <Button text="Сжать" type='submit'/>
        <Button text="Очистить" onClick={() => setLinkValue('')}/>

        {linkError ? <p className="squeeze__error">{linkError}</p> : null}
      </form>

      {shortLink
        ? <>
            <p className="squeeze__title">Сокращенная ссылка:</p>
            <button className={`squeeze__copy-link${copyTooltipVisibility ? ' copied' : ''}`} onClick={onCopyButtonClick}>{shortLink}</button>
          </>
        : null}

    </section>
  );
};

export default Squeeze;