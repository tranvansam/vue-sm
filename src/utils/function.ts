export const linkS3 = (link : any) => {
  if(link && !link.includes('http')){
    return `https://storage.permate.com/${link}`
  }
  return link
}