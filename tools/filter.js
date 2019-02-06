filterSchedule = (schedule, from, to) => {
    alert("Here")
    if (from && to) {
        schedule = schedule.slice(from.getHours() - 7, to.getHours() - 7)
        let clasesInclude = [];
        schedule[0].clases.forEach(element => {
            let include = true;
            schedule.forEach(item => {
                if (!item.clases.includes(element)) { include = false }
            });
            if (include) clasesInclude.push(element);
        });
        return clasesInclude;
    }
    return [];
}

export default filterSchedule;