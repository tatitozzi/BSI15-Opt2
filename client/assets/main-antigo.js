"use strict";
var WindowControll = /** @class */ (function () {
    function WindowControll() {
        if (WindowControll.instance)
            return WindowControll.instance;
        this.windows = document.querySelectorAll('div.window');
        this.openByElement(this.windows[0]);
        return WindowControll.instance
            || (WindowControll.instance = this);
    }
    WindowControll.prototype.closeAll = function () {
        this.windows.forEach(function (el) { return el.classList.remove('open'); });
    };
    WindowControll.prototype.openByElement = function (element) {
        this.closeAll();
        this.currentWindow = element;
        element.classList.add('open');
    };
    WindowControll.prototype.open = function (querySelector) {
        return this.openByElement(document.querySelector(querySelector));
    };
    return WindowControll;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1hbnRpZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90eXBlc2NyaXB0L21haW4tYW50aWdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUtJO1FBQ0ksRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQTtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBRSxZQUFZLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNuQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVE7ZUFDdkIsQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBb0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUE7UUFDNUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELDZCQUFJLEdBQUosVUFBSyxhQUFxQjtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7SUFDcEUsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQyJ9