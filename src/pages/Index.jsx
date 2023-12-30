
import { Book } from '../components/book';
import { Layout } from '../components/layout';
import useAppContext from '../store/store';

export const Index = () => {

  const store = useAppContext();

  const booksConatiner = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  }

  return (
    <Layout>
      <div styles={booksConatiner}>
        {
          store.items.map( item => 
            
            <Book item={item} key={item.id} />
          )
        }
      </div>
      
    </Layout>
  )
}
