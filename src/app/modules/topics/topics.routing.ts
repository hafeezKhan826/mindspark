import { Routes, RouterModule } from '@angular/router';

import { TopicsComponent } from './topics.component';
import { TopicsListComponent } from './components/topics-list/topics-list.component';
import { QuestionsComponent } from '../../shared/components/questions/questions.component';
import { TopicDetailsComponent } from './components/topic-details/topic-details.component';
import { TopicTrailComponent } from './components/topic-trail/topic-trail.component';
export const TopicsRoutes: Routes = [
  { path: '', component: TopicsListComponent, pathMatch: 'full' },
  { path: 'trails', component: TopicTrailComponent },
  { path: 'content', component: QuestionsComponent },
  { path: 'detail', component: TopicDetailsComponent, pathMatch: 'full' },
];
