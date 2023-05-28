import { Product } from '../components/Product';
import contents from '../data/content';

export default function ProductApp() {
    return(
           <div className='App'>
               {contents.map(contents => (
                   <Product 
                       key={contents.id}
                       image={contents.image}
                       name={contents.name}
                       price={contents.price}
                       totalSales={contents.totalSales}
                       timeLeft={contents.timeLeft}
                       rating={contents.rating}
                   />
               ))}
           </div>
    )
}