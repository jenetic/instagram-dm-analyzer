export const filterSearchResults = () => {
  const searchBar = <HTMLInputElement>document.getElementById("search-threads-input");
  const query = searchBar.value.toLowerCase();
  const dmList = document.getElementById("dm-list");
  const threads = dmList.getElementsByTagName('button');

  for (let i = 0; i < threads.length; i++) {
    const threadName = threads[i].textContent;
    if (threadName.toLowerCase().indexOf(query) > -1) {
      threads[i].style.display = "block";
    } else {
      threads[i].style.display = "none";
    }
  }
}

