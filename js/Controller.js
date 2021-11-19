const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView ,searchResultView}) {
    console.log(tag, "constructor");

    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;

    this.subscribeViewEvents();
  }

  //검색에서 이벤트 발생시 실행됨
  subscribeViewEvents() {
    console.log(tag,"이벤트발생 !!")

    this.searchFormView
    .on("@submit", (event) =>this.search(event.detail.value))
    .on("@reset", ()=> this.reset());

    // TODO
  }

  //검색 키워드가 들어오는곳
  search(searchKeyword) {
    console.log(tag, "search", searchKeyword);
    this.store.search(searchKeyword)
    this.render()
  }
  reset(){

  }
  
  render(){
    if(this.store.searchKeyword.length > 0){
      this.searchResultView.show(this.store.searchResult)
      return
    }
    this.searchResultView.hide();
  }
}
