import LessonCard from "../../components/LessonCard/LessonCard";

export default function LessonHome() {
  return (
    <div className='w-100 d-flex flex-lg-row flex-column p-lg-4 p-3'>
      <LessonCard 
        title='Linked List' 
        category='Algorithm'
        description='A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.'
        completion='100'
        lessonId='linked-list'
      />
    </div>
  );
}