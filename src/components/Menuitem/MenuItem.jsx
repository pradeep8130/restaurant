import React from 'react';
import './MenuItem.css';
const MenuItem = (  {title, price, tags}) => (
<div class="app__menuitem">
   <div class="app__menuitem-head">
      <div class="app__menuitem-name">
         <p class="p__cormorant" style={{color: '#dcca87'}}>{title}</p>
      </div>
      <div class="app__menuitem-dash"></div>
      <div class="app__menuitem-price">
         <p class="p__cormorant">${price}</p>
      </div>
   </div>
   <div class="app__menuitem-sub">
      <p class="p__opensans"  style={{color: '#dcca87'}}>{tags}</p>
   </div>
</div>
);

export default MenuItem;
