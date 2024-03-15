var isValid = function(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s){
        if(char in brackets){
            stack.push(char);
        } else {
            const last = stack.pop();
            if(char !== brackets[last]){
                return false;
            }
        }
    }

    return stack.length === 0;
};

//Example usage:

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));