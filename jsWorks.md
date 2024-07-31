Macro tasks = setTimeOut, setInterval, I/O,
Micro tasks = promise, callback,async await, process.nextTick()

callback queue - It holds all the functions which are going exeucutes in first in first out order. callback queue consists of microqueue and macro queue

call stack - where Javascript code executes.

event loop - it is an infinity loop run through callback queue and evxecutes javascript code one by one.

Event loop will take one by one asynchronous tasks to call stack and execute
