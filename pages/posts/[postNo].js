import { useRouter } from 'next/router'

const PostNo = () => {
    const router = useRouter();
    const post = router.query.postNo

  return (
    <>
    You are at {post} number
    </>
  )
}

export default PostNo
