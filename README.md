# text

React component used to transform JS/ON arrays into text paragraphs.


### Usage
```
import React, { Component } from 'react'
import Text from 'text'

class Foo extends Component {
    render() {
        let paragraphs = [
            "Hey!,
            "Ho!",
            "Lets Go!"
        ];

        return (
            <Text copy={paragraphs} />
        ); 
    }
}


// Returns the following
<div class="row">
    <p>Hey!</p>
    <p>Ho!</p>
    <p>Let's Go!</p>
</div>
```



### Todo
* Tests
* Refactor code to allow users to add custom class name to div
