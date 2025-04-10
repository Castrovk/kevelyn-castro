function searchVideo (event) {
    const videos = document.getElementsByClassName('video-card');
    const search = event.target.value.toLowerCase();

    for (const video of videos) {
    
        const videoInfo = {
         title: video.getElementsByTagName('h3')[0].innerText.toLowerCase(),
         channelname: video.getElementsByTagName('p')[0].innerText.toLowerCase(),
         category: video.getElementsByTagName('p')[1].innerText.toLowerCase()
        }
      
        video.style.display = 'revert';
        
        if (!matches(videoInfo, search)) {
           video.style.display = 'none';
        }
     
    }
}

function matches (videoInfo, searchTerm) {
    return (
        videoInfo.title.includes(searchTerm) ||
        videoInfo.channelname.includes(searchTerm) ||
        videoInfo.category.includes(searchTerm)
    )


}