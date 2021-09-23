## Installation

Run `npm install fr3-responsive-table`

## How to use this package?

Use:

```
import React from "react";
import ResponsiveTable from "fr3-responsive-table";

const App = () => {
  return (
    <ResponsiveTable>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="id">01</td>
            <td data-label="name">Product_Name</td>
            <td data-label="price">5000</td>
            <td data-label="update">update</td>
            <td data-label="delete">delete</td>
          </tr>
        </tbody>
      </table>
    </ResponsiveTable>
  );
};

export default App;
```

## Instruction

1.Do not forget to add data-label => data-label="TABLE_DATA_NAME".
2.You can style your table with your own class.
3.See my git_repo to get details idea.

## Author

![CHEESE!](rony.png)

```diff
Pray for me & support my work!
```
