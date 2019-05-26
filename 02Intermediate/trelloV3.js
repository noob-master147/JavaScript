let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num=0){
        this.meetings = this.meetings+ num
    },

    summary: function(){
        return `You have ${this.meetings - this.meetDone} meetings today!`
    },

    meetingDone: function(num=0){
        this.meetDone = this.meetDone + num
    },

    reset: function(){
        this.meetings = 0
        this.meetDone = 0
    },
} 

myTodos.addMeeting(5)
myTodos.meetingDone(5)

console.log(myTodos.summary())

//Assignment
// meeting done
// create a function that reset entire day

