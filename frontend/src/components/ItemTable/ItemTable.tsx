import axios from 'axios';

import { IPropItemTable } from '../../interfaces/IPropItemTable';
import { urls } from '../../data/urls';
import { useAppDispatch } from '../../hooks/redux';
import { tableSlice } from '../../store/reducers/TableSlice';


function ItemTable(prop: IPropItemTable) {

  const {update} = tableSlice.actions;
  const dispatch = useAppDispatch();

  function getAvailability() {
    axios.get(urls.PATH_PHARMACY, {
      params: {
        id: prop.id
      }
    }).then(response => {
      console.log(response.data.medicaments)
      dispatch(update({
        data: response.data.medicaments,
        caption: 'Ассортимент'
      }))
    })
  }


  return (
    <tr className='hover:bg-green-300 hover:cursor-pointer' onClick={getAvailability}>
      {
        Object.values(prop.row).map((item, idx) => idx !== 0 ? 
        <td className='border px-3'>{item}</td> : '')
      }
    </tr>
  )
}

export default ItemTable