export class ComponentPhone {
    private firstElementItem: HTMLDivElement|null;
    private firstElementInputPhone: HTMLInputElement|null;
    private addButton: HTMLButtonElement;
   
    constructor (
        private elementRoot: HTMLDivElement
    ) 
        {        
            this.firstElementItem = elementRoot.querySelector('div.item')
            this.firstElementInputPhone = <HTMLInputElement> this.firstElementInputPhone.querySelector('input.number')
            this.addButton = elementRoot.querySelector('button.button-add')
            this.atachEvents()
         }

         private atachEvents(){
            this.addButton.addEventListener ('click', ev => { 
                if (this.firstElementInputPhone.trim() == ""){
                    ev.stopImmediatePropagation()
                    return
                }
                //alert (123)
                var itemCloned = <HTMLDivElement>this.firstElementItem.cloneNode(true)
                this.elementRoot.insertBefore(itemCloned, this.firstElementItem)
                this.firstElementInputPhone.value =""
                
                var button = itemCloned.querySelector('button.button-add')
                button.className = ""
                button.innerText = "-"

                button.addEventListener('click', ev => {
                    ev.target.closest('div.item').remove()
                }
            )
            }) 
         }
}