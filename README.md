# maxfront-custom-table

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Usage
### Import the package in your component
```
import { MaxTable } from 'maxfront-custom-table'
```

### Basic syntax

``` vue
<max-table :columns="[]" :data="[]"></max-table>
```

### Options
| Option     | Type    | Description                                                                                                                                                                                 |
|------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| columns    | Array   | An object array of the column names. IT is always in the format { name: '', display: '' }  Name: The property name of the column in the table data Display: The text that will be displayed |
| data       | Array   | An object array of the rows in the table. **Note:** Each column name must match a single property of the objects in this array                                                              |
| striped    | Boolean | Add the bootstrap 'table-striped' class. (true)                                                                                                                                             |
| borderless | Boolean | Add the bootstrap 'table-borderless' class. (true)                                                                                                                                          |
| bordered   | Boolean | Add the bootstrap 'table-bordered' class. (true)                                                                                                                                            |
