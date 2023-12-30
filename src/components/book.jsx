import {Link} from 'react-router-dom';

export const Book = ({item}) => {
  const bookContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px'
  };
  const bookInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px'
  };
  
  return (
    <div style={bookContainerStyle}>
        <Link to={`/view/${item.id}`} style={bookInfoStyle}>
          <img src={item.cover} width='200' alt={item.title} />  
        </Link>
        <div>{item.title}</div>
        <div>{item.intro}</div>
    </div>
  )
}
