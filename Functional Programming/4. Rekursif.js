const countDown = start => {
    console.log(start);
    if (start > 1) countDown(start - 1);
}

countDown(100);