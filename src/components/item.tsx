import React from 'react';

interface ItemProps {
Address: string;
City: string;
State: string;
Price: number;
Image: string;
}

function formatPrice(price: number): string {
return new Intl.NumberFormat('en-US', {
style: 'currency',
currency: 'USD',
minimumFractionDigits: 0,
maximumFractionDigits: 0,
}).format(price);
}

const Item: React.FC<ItemProps> = ({
Address, City, State, Price, Image,
}) => {
return (
<div>
<img src={Image} alt="Item" />
<div className='item-price'>{formatPrice(Price)}</div>
<div className='item-address'>{`${Address}, ${City}, ${State}`}</div>
</div>
);
};

export default Item;