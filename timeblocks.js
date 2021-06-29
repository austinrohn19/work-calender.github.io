function createTimeblock(time, text, index) {
    const timeblockEl = $(`
        <div class="row time-block">
            <div class="hour">${time.display}</div>
        </div>
        `);

        const timeblockInput = $(`
        <textarea name="time-block" class="description">${text}</textarea>
    `);

    const currentHour = moment().hour();
         if (time.value < currentHour) timeblockInput.addClass("past");
  
        else if (time.value === currentHour) timeblockInput.addClass("present");
    
        else timeblockInput.addClass("future");

    const timeblockSaveBtn = (`
        <button class="saveBtn">
            <i class="fas fa-save"></i>
        </button>
    `);

    timeblockSaveBtn.click(function () {
        timeblocks[index] = timeblockInput.val();
        localStorage.setItem("timeblocks", JSON.stringify(timeblocks));
    });

    timeblockEl.append(timeblockInput);
    timeblockEl.append(timeblockSaveBtn);

    return timeblockEl;
}
