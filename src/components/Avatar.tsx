
type Props = {
    image: string,
  }

const Avatar = ({image}:Props) => {
  return (
    <div className="avatar">
         <img
        className="avatar"
        src= {image}
        alt="Sara Zenebe"
      />
     
    </div>
  )
}

export default Avatar