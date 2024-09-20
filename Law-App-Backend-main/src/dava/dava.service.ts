import { Dava } from './entities/dava.entity';
import { CreateDavaDto } from './dto/create-dava.dto';
import { UpdateDavaDto } from './dto/update-dava.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { firestore } from 'firebase-admin';

@Injectable()
export class DavaService {
  private db: firestore.Firestore;
  private davaCollection: firestore.CollectionReference;

  constructor() {
    this.db = firestore();
    this.davaCollection = this.db.collection('davas');
  }

  async create(createDavaDto: CreateDavaDto): Promise<Dava> {
    const newDava = new Dava();
    Object.assign(newDava, createDavaDto);
    const docRef = this.davaCollection.doc();
    await docRef.set(newDava);
    return newDava;
  }

  async findAll(): Promise<Dava[]> {
    const snapshot: firestore.QuerySnapshot = await this.davaCollection.get();
    const dava: Dava[] = snapshot.docs.map((doc) => doc.data() as Dava);
    return dava;
  }

  async findOne(id: string): Promise<Dava> {
    const docRef = this.davaCollection.doc(id);
    const doc: firestore.DocumentSnapshot = await docRef.get();
    if (!doc.exists) {
      throw new NotFoundException(`${id} Numaralı dava bulunamadı.`);
    }
    return doc.data() as Dava;
  }

  async update(id: string, updateDavaDto: UpdateDavaDto): Promise<Dava> {
    const dava = await this.findOne(id);
    if (!dava) {
      throw new NotFoundException(`${id} Numaralı dava bulunamadı.`);
    }
    Object.assign(dava, updateDavaDto as any);
    const docRef = this.davaCollection.doc(id);
    await docRef.update(id, updateDavaDto);
    return dava;
  }

  async remove(id: string): Promise<void> {
    await this.davaCollection.doc(id).delete();
  }
}
