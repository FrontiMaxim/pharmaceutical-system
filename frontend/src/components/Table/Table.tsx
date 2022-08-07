import React, {useContext, useEffect, useState } from 'react'
import axios from 'axios';

import ItemTable from '../ItemTable/ItemTable'
import {urls} from '../../data/urls'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { tableSlice } from '../../store/reducers/TableSlice';

const headers: {[key: string]: string[]} = {
  'Аптеки' : ['Название', 'Адрес', 'Телефон', 'Начало рабочего дня', 'Конец рабочего дня'],
  'Ассортимент': ['Название', 'Вес', 'Дозировка', 'Срок годности','Количество на складе', 'Цена', 'Дата поступления']
}

function Table() {

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {data, caption} = useAppSelector(state => state.tableReducer)
  const {update} = tableSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get(urls.PATH_PHARMACY)
      .then(response => {
        dispatch(update({
          data: response.data,
          caption: 'Аптеки'
        }))
        setIsError(false);
      })
      .catch(err => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => setIsLoading(false))
  }, []);


  return (
    <>
    {
      isLoading ? 
      <div>
        Идёт загрузка данных...
      </div>
      : !isError &&
      <table className='border-collapse border mt-4'>
          <caption>{ caption }</caption>
          <thead>
            <tr>
                {
                  headers[caption].map(header => <th className='border px-2'>{header}</th>)
                }
            </tr>
          </thead>
          <tbody >
            {
              data.map(item => <ItemTable key={item.id} id={item.id} row={item}/>)
            }
          </tbody>
      </table>
    }
    {
      isError && <div>Запрос выполнен неудачно!</div>
    }
    </>
  )
}

export default Table