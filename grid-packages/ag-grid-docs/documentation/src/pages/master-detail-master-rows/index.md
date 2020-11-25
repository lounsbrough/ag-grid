---
title: "Master / Detail - Master Rows"
enterprise: true
---

Master Rows are the rows inside the Master Grid that can be expanded to display Detail Grids.

## Static Master Rows

Once a Master Grid is configured with `masterDetail=true`, all rows in the Master Grid behave as Master Rows, in that they can be expanded to display Detail Grids.

```js
gridOptions = {
    // by itself, all rows will be expandable
    masterDetail=true,
    ...
}
```

Because Static Master Rows are used in all the basic examples of Master / Detail, another example is not given here.

## Dynamic Master Rows

Dynamic Master Rows allows specifically deciding what rows in the Master Grid can be expanded. This can be useful if, for example, a Master Row has no child records, then it may not be desirable to allow expanding the Master Row.

In specify which rows should expand, provide the grid callback `isRowMaster`. The callback will be called once for each row. Return `true` to allow expanding and `false` to disallow expanding for that row.

```js
gridOptions = {
    // turn on master detail
    masterDetail = true,

    // specify which rows to expand
    isRowMaster = function(dataItem) {
        return expandThisRow ? true : false;
    }
    ...
}
```

The following example only shows detail rows when there are corresponding child records.

<grid-example title='Dynamic Master Rows' name='dynamic' type='generated' options='{ "enterprise": true, "exampleHeight": 510, "modules": ["clientside", "masterdetail", "menu", "columnpanel"] }'></grid-example>


## Changing Dynamic Master Rows

The callback `isRowMaster` is re-called after data changes in the row as a result of a [Transaction Update](../data-update-transactions/). This gives the opportunity to change whether the row is expandable or not.

```js
// to get isRowMaster called again, update the row
// using a Transaction Update
var transaction = { update: [ updatedRecord1, updatedRecord2 ] };
gridOptions.api.applyTransaction(transaction);
```

In the example below, only Master Rows that have data to show are expandable. Note teh following:

- Row 'Nora Thomas' has no detail records, thus is not expandable.

- Row 'Mila Smith' has detail records, thus is expandable.

- Clicking 'Clear Milla Calls' removes detail records from Mila Smith which results in the Milla Smith row no longer been a Master Row.

- Clicking 'Set Milla Calls' sets detail records from Mila Smith which results in the Milla Smith becoming a Master Row.


<grid-example title='Dynamically Changing Master Rows' name='changing-dynamic-1' type='generated' options='{ "enterprise": true, "exampleHeight": 510, "modules": ["clientside", "masterdetail", "menu", "columnpanel"] }'></grid-example>

The example below extends the previous example. It demonstrates a common scenario of the Master Row controlling the Detail Rows. Note the following:

- Each Master Row has buttons to add or remove one detail rows.

- Clicking 'Add' will:
    - Add one detail row.
    - Ensure the Master Row is expandable.
    - Ensure the Master Row is expanded (ie the Detila Grid is visible).

- Clicking 'Remove' will:
    - Remove one detail row.
    - If no detail rows exist, ensure Master Row is not expandable. Ensure the Master Row

<grid-example title='Dynamically Changing Master Rows' name='changing-dynamic-2' type='generated' options='{ "enterprise": true, "exampleHeight": 510, "modules": ["clientside", "masterdetail", "menu", "columnpanel"] }'></grid-example>
