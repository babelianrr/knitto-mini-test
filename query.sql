SELECT customers.customerNumber
FROM customers
LEFT JOIN orders ON orders.customerNumber = customers.customerNumber
LEFT JOIN orderdetails ON orderdetails.orderNumber = orders.orderNumber
LEFT JOIN products ON products.productCode = orderdetails.productCode
WHERE products.productLine = 'Classic Cars'
AND orderdetails.quantityOrdered > 23