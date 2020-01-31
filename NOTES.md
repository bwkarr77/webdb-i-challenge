SQL

TABLES

"yarn knex seed:run" to load the data for Insomniac to run.

Database Queries

- Select \* FROM <Table>

  - Selects all (\* = all) from <Table Name>

- Select <Name> FROM <Table>

  - Selects <Specific Field> from <Table Name>

- SELECT \* FROM <Table> order by <Field> desc limit <##>;

  - Selects all from <Table Name>, ordering the return by <Field Name>, "desc"-ending order, limit of <##> returns.

- SELECT \* FROM <Table> where <Field1> in ('<str1>', '<str2>') or <Field2> ='<str3>'
  - Select all from <Table Name>, looking for <str1> or <str2> IN <Field1>, OR looking for <str3> IN <Field2>
- Insert into <Table> (var1, var2,..., varN) values (in1, in2,...,inN)

  - Insert into <Table Name> (these fields) = (these values)

- update <Table> set <Field> = <value> where <Field2> = <value2>

  - Updates <Table Name>, change <Field> to <value>, where <Field2> = <value2>

- select count(distinct(City)) from <Table>

  - select (count of distinct values in <Field>) from <Table Name>

- select \* from <Table> where length(<Field>) > <num>;
  - Selects All from <Table Name>,
    where the length of the <Field Name> is greater than <num>
