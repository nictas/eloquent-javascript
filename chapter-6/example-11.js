if (require.main === module) {
    let okIterator = 'OK'[Symbol.iterator]();
    console.log(`okIterator.next(): ${JSON.stringify(okIterator.next())}`);
    console.log(`okIterator.next(): ${JSON.stringify(okIterator.next())}`);
    console.log(`okIterator.next(): ${JSON.stringify(okIterator.next())}`);
    console.log(`okIterator.next(): ${JSON.stringify(okIterator.next())}`);
}
