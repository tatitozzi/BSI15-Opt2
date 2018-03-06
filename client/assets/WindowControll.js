define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.WindowControll = WindowControll;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2luZG93Q29udHJvbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90eXBlc2NyaXB0L1dpbmRvd0NvbnRyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBS0k7WUFDSSxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO2dCQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQTtZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBRSxZQUFZLENBQUMsQ0FBQTtZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVE7bUJBQ3ZCLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUMzQyxDQUFDO1FBRUQsaUNBQVEsR0FBUjtZQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtRQUM1RCxDQUFDO1FBRUQsc0NBQWEsR0FBYixVQUFjLE9BQW9CO1lBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFBO1lBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2pDLENBQUM7UUFFRCw2QkFBSSxHQUFKLFVBQUssYUFBcUI7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQ3BFLENBQUM7UUFDTCxxQkFBQztJQUFELENBQUMsQUEzQkQsSUEyQkM7SUEzQlksd0NBQWMifQ==