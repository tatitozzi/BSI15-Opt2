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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3R5cGVzY3JpcHQvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFLSTtRQUNJLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUE7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUUsWUFBWSxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRO2VBQ3ZCLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE9BQW9CO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFBO1FBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssYUFBcUI7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO0lBQ3BFLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkMifQ==