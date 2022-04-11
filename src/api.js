import axios from 'axios'

const postRequest = (category, prayerInput, scriptures) => {
    axios.post ('http://localhost:5000/prayers/savePrayers', {
        category ,
        prayerInput ,
        scriptures ,
    })
    .then((response) => {console.log(response) })
    .catch(err => console.log("Error when saving prayer."))
}

export default postRequest