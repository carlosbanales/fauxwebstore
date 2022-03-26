import  { Outlet } from 'react-router-dom';

function Products() {
    return (
        <div>
            Products Page
            <Outlet />
        </div>   
    )
};

export default Products;