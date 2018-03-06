define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentPhone = /** @class */ (function () {
        function ComponentPhone(elementRoot) {
            this.elementRoot = elementRoot;
            this.firstElementItem = elementRoot.querySelector('div.item');
            this.firstElementInputPhone = this.firstElementInputPhone.querySelector('input.number');
            this.addButton = elementRoot.querySelector('button.button-add');
            this.atachEvents();
        }
        ComponentPhone.prototype.atachEvents = function () {
            var _this = this;
            this.addButton.addEventListener('click', function (ev) {
                //alert (123)
                var itemCloned = _this.firstElementItem.cloneNode(true);
                _this.elementRoot.insertBefore(itemCloned, _this.firstElementItem);
                _this.firstElementInputPhone.value = "";
                var button = itemCloned.querySelector('button.button-add');
                button.className = "";
                button.innerText = "-";
                button.addEventListener('click', function (ev) {
                    ev.target.closest('div.item').remove();
                });
            });
        };
        return ComponentPhone;
    }());
    exports.ComponentPhone = ComponentPhone;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50UGhvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90eXBlc2NyaXB0L0NvbXBvbmVudFBob25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBS0ksd0JBQ1ksV0FBMkI7WUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1lBRy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQzdELElBQUksQ0FBQyxzQkFBc0IsR0FBc0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMxRyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUMvRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDckIsQ0FBQztRQUVPLG9DQUFXLEdBQW5CO1lBQUEsaUJBZ0JDO1lBZkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBRSxPQUFPLEVBQUUsVUFBQSxFQUFFO2dCQUN4QyxhQUFhO2dCQUNiLElBQUksVUFBVSxHQUFtQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUN0RSxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7Z0JBQ2hFLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEdBQUUsRUFBRSxDQUFBO2dCQUVyQyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUE7Z0JBQzFELE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO2dCQUNyQixNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtnQkFFdEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBLEVBQUU7b0JBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO2dCQUMxQyxDQUFDLENBQ0osQ0FBQTtZQUNELENBQUMsQ0FBQyxDQUFBO1FBQ0wsQ0FBQztRQUNWLHFCQUFDO0lBQUQsQ0FBQyxBQWhDRCxJQWdDQztJQWhDWSx3Q0FBYyJ9