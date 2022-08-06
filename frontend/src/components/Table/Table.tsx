import React, { useEffect, useState } from 'react'

import { IAvailability } from '../../interfaces/IAvailability'
import { IMedicament } from '../../interfaces/IMedicament'
import { IPharmacy } from '../../interfaces/IPharmacy'
import ItemTable from '../ItemTable/ItemTable'
import {urls} from '../../data/urls'

const headers: {[key: string]: string[]} = {
  'Аптеки' : ['Название', 'Адрес', 'Телефон', 'Начало рабочего дня', 'Конец рабочего дня'],
  'Медикаменты': ['Название', 'Вес', 'Дозировка', 'Срок годности'],
  'Ассортимент': ['Название медикамента', 'Количество на складе', 'Цена', 'Дата поступления']
}

function Table() {

  const [dataTable, setDataTable] = useState<IPharmacy[] | IAvailability[] | IMedicament[]>([]);
  const [caption, setCaption] = useState<string>('');

  useEffect(() => {
    fetch(urls.PATH_PHARMACY)
    .then(response => response.json())
    .then(data => 
      {
        data = data as IPharmacy;
        setDataTable(data);
        setCaption('Аптеки');
      }
    ).catch(err => console.log(err))
  }, []);

  return (
    <>
    {
      dataTable.length === 0 ? 
      <div>
        Идёт загрузка данных...
      </div>
      :
      <table className='border-collapse border mt-4'>
          <caption>{ caption }</caption>
          <thead>
            <tr>
                {
                  headers[caption].map(header => <th className='border px-2'>{header}</th>)
                }
            </tr>
          </thead>
          <tbody>
            {
              dataTable.map(item => <ItemTable key={item.id} data={item}/>)
            }
          </tbody>
      </table>
    }
    </>
  )
}

export default Table