import LessonCard from "../../components/LessonCard/LessonCard";

export default function LessonHome() {
  return (
    <div className='w-100 d-flex flex-lg-row flex-column p-lg-4 p-3 justify-content-between'>
      <LessonCard 
        title='Linked List' 
        category='Data Structure'
        description='A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.'
        completion='100'
        lessonId='linked-list'
        img_url='linked-list.svg'
      />
      <LessonCard 
        title='Arrays' 
        category='Data Structure'
        description='An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.'
        completion='35'
        lessonId='arrays'
        img_url='linked-list.svg'
      />
    </div>
  );
}