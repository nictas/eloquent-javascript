/*
 Roughly translates to the following Java code:
    public static void main(String[] args) {
        ScheduledThreadPoolExecutor executor = new ScheduledThreadPoolExecutor(1);
        AtomicInteger i = new AtomicInteger(0);
        while (i.get() < 3) {
            Runnable print = () -> System.out.println(i.get());
            executor.schedule(print, 100, TimeUnit.MILLISECONDS);
            i.incrementAndGet();
        }
    }
*/
const closureVar = function () {
    for (var i = 0; i < 3; i++) {
        const log = function () {
            console.log(i);
        }
        setTimeout(log, 100);
    }
}

/*
 Roughly translates to the following Java code:
    public static void main(String[] args) {
        ScheduledThreadPoolExecutor executor = new ScheduledThreadPoolExecutor(1);
        int i = 0;
        while (i < 3) {
            int j = i;
            Runnable print = () -> System.out.println(j);
            executor.schedule(print, 100, TimeUnit.MILLISECONDS);
            i++;
        }
    }
*/
const closureLet = function () {
    for (let i = 0; i < 3; i++) {
        const log = function () {
            console.log(i);
        }
        setTimeout(log, 100);
    }
}

module.exports = { closureVar, closureLet };

if (require.main === module) {
    closureVar();
    closureLet();
}
