import React, {useState} from 'react';
import {useHttp} from '../hooks/http.hook';

export const AuthPage = () => {
  const {loading, request} = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form});
      console.log('Data', data);
    } catch (error) {
      
    }
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Сократи ссылку</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>

              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input 
                  placeholder="Введите email" 
                  id="email" 
                  type="text"
                  name="email" 
                  className="yellow-input"
                  onChange={changeHandler}
                />                
              </div>

              <div className="input-field">
              <label htmlFor="email">Пароль</label>
                <input 
                  placeholder="Введите пароль" 
                  id="password" 
                  type="password"
                  name="password"
                  className="yellow-input" 
                  onChange={changeHandler}                  
                />                
              </div>

            </div>         
          </div>
          <div className="card-action">
            <button 
              className="btn yellow darken-4" 
              style={{marginRight: 10}}
            >
              Войти
            </button>
            <button 
              className="btn grey whiten-1 black-text"
              onClick={registerHandler}  
              disabled={loading}            
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  )  
}