import React from 'react';

import { IAvailability } from '../../interfaces/IAvailability';
import { IMedicament } from '../../interfaces/IMedicament';
import { IPharmacy } from '../../interfaces/IPharmacy';

interface IPropItemTable {
  data:  IPharmacy | IAvailability | IMedicament
}

function ItemTable(prop: IPropItemTable) {
  return (
    <tr className='hover:bg-green-300 hover:cursor-pointer'>
      {
        Object.values(prop.data).map((item, idx) => idx !== 0 ? 
        <td className='border px-3'>{item}</td> : '')
      }
    </tr>
  )
}

export default ItemTable