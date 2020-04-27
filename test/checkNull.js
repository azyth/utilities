let obj = {
    regularArray: ["a value", "or two"],
    nestedArray: [
        ["a value", "or two"],
        [
            {
                nestedItem: "a value",
                regularArray: ["a value", "or two"]
            },
            {
                nestedItem: "a value"
            }
        ]
    ],
    item: "a Value",
    regularObject: {
        nestedItem: "a value"
    }
}
let checkNULL= (q,w,e)=> {return false};
// assert logs the error when the condition is FALSE
console.assert(checkNULL(obj, 'regularArray[0]', false), 'failure with array indexing')
console.assert(checkNULL(obj, 'regularArray[3]', true), 'failure with array indexing')
console.assert(checkNULL(obj, 'nestedArray[0][0]', false), 'failure with nestedArray indexing')
console.assert(checkNULL(obj, 'nestedArray[0][3]', true), 'failure with nestedArray indexing')
console.assert(checkNULL(obj, 'nestedArray[1][0].nestedItem', false), 'failure with nestedArray indexing')
console.assert(checkNULL(obj, 'nestedArray[1][0][nestedItem]', false), 'failure with nestedArray indexing')
console.assert(checkNULL(obj, 'nestedArray[3][0][nestedItem]', true), 'failure with nestedArray indexing')
console.assert(checkNULL(obj, 'nestedArray[1][0].notNestedItem', true), 'failure with nestedArray indexing')
console.assert(checkNULL(obj, 'nestedArray[1][0].regularArray[0]', false), 'failure with nestedArray indexing')
console.assert(checkNULL(obj, '[nestedArray][1][0].regularArray[0]', false), 'failure with nestedArray indexing')
console.assert(checkNULL(obj, 'nestedArray[1][0].regularArray[3]', true), 'failure with nestedArray indexing')
console.assert(checkNULL(obj, 'item', false), 'failure with item')
console.assert(checkNULL(obj, 'notAnItem', true), 'failure with item')
console.assert(checkNULL(obj, '[item]', false), 'failure with item')
console.assert(checkNULL(obj, 'regularObject', false), 'failure with regularObject')
console.assert(checkNULL(obj, 'regularObject.nestedItem', false), 'failure with regularObject')
console.assert(checkNULL(obj, 'regularObject[nestedItem]', false), 'failure with regularObject')
console.assert(checkNULL(obj, 'regularObject.notAnItem', true), 'failure with regularObject')
