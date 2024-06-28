import LessonCard from "../../components/LessonCard/LessonCard";

export default function LessonHome() {
  return (
    <div className='container'>
      <div className='row p-4 pt-0'>
        <LessonCard 
          title='Linked List' 
          category='Data Structure'
          description=''
          completion='100'
          lessonId='linked-list'
          img_url='linked-list.svg'
        />
        <LessonCard 
          title='Arrays' 
          category='Data Structure'
          description=''
          completion='35'
          lessonId='arrays'
          img_url='linked-list.svg'
        />
        <LessonCard 
          title='Arrays' 
          category='Data Structure'
          description=''
          completion='35'
          lessonId='arrays'
          img_url='linked-list.svg'
        />
      </div>
    </div>
  );
}
