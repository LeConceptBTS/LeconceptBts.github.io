var posts=["clhh6oj6h0001joqf3ry26scb/a3eadeefbdb7/","clhh6oj6k0003joqfevgw531u/e67a060d717f/","clhh6oj6m0007joqfdbhi877a/cd9d5d5753cb/","clhh6oj6n0009joqf4rgw3b1o/42a26f1f0be0/","clhh6oj6o000bjoqfb6fw5frh/7a061fb21c7d/","clhh6oj76000ujoqffh2mc3cv/ae88254c41b0/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[];
    var refreshNum = 1;
    var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
    function addFriendLinksInFooter() {
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };