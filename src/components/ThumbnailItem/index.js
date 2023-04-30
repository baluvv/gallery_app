import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickChangeImage, isActiveTabId} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = imageDetails

  const onClickChange = () => {
    onClickChangeImage(id)
  }

  const activeTabClassName = isActiveTabId ? 'activeThumbNail' : 'thumbnail'

  return (
    <li className="list-item-">
      <button className="button" onClick={onClickChange}>
        <img
          src={thumbnailUrl}
          className={activeTabClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
