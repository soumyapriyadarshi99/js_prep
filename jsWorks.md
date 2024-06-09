Macro tasks = setTimeOut, setInterval, I/O,
Micro tasks = promise, callback,async await, process.nextTick()

callback queue - It holds all the functions which are going exeucutes in first in first out order.

callback queue consists of microqueue and macro queue

event loop - it an infinity loop run through callback queue and evxecutes javascript code one by one.
