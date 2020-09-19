import styles from '../styles/thumbnail.module.css'

function Thumbnail(props){
    const image = props.image;
    const altText = props.alt;

    return <img className={styles.thumbnail} src={image} alt={altText}/>

}

export default Thumbnail;