//C. Part3: Bonus (2 Grades):
//1-

var createCounter = function(init) {

    let count = init;

    return {

        increment: function() {
            count++;
            return count;
        },

        decrement: function() {
            count--;
            return count;
        },

        reset: function() {
            count = init;
            return count;
        }

    };
};

