                                                 (15) React Hooks

1. Apa itu react Hooks

   Marupakan fitur baru dari react 16.8. kita daoat menggunakan state dan fitur react tanpa perlu menulis sebuah kelas.

   # Hook pada React

   > Hooks dasar
   > useState
   > useEffect
   > useContext

   Hooks tambahan

   > useReducer
   > useCallback
   > useMemo
   > useRef
   > useImperativeHandle
   > useLayoutEffect
   > useDebugValue

   # Aturan pada Hook

   - Hanya panggil Hooks ditingkat atas
   - Memanggil Hooks dari komponen fungsi react
   - Memanggil Hooks dari custom Hooks

---

2. Implemntasi useState & useEffect di Component

   > Menggunakan useState

   - Function component

   - Deklarasi variable state

     o Apa yang terjadi Ketika memanggil useState
     o Apa yang diberikan ke useSate sebagai argument
     o Apa yang dikembalikan useSate

   - Membaca state

   - Melakukan pembaruan state

   > Menggunakan useEffect

   - Adalah hooks yang melakukan efek samping di dalam function component
   - Component DidMount, componentDidUpdate, dan componentWillUnmount = useEffect
   - Ada 2 jenis, butuh pembersihan dan tidak butuh pembersihan

---

3. Membuat Custom Hooks

   Membuat Hooks kita sendiri memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.
