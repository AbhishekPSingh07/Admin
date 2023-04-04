
import DataTable from '../../Components/DataTable/DataTable'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import './List.scss'

function List({title,collect,source}) {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='list__container'>
        <Navbar/>
        <DataTable title={title}  collect={collect} source={source}/>
      </div>
    </div>
  )
}

export default List
