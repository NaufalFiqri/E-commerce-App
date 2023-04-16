import React from 'react';

const Price = ({ salePrice, originalPrice}) => {
    return (
        <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">RM{originalPrice.toFixed(2)}</span>
            RM{salePrice.toFixed(2)}
            {/* .toFixed() == number of decimal places */}
          </>
        ) : (
            /* : == otherwise */
          <> RM{originalPrice} </>
        )}
      </div>
    );
}

export default Price;
